const definedRefs = new WeakMap<
  Storage,
  {
    [key: string]: Ref<string>;
  }
>();

function getDefined(storage: Storage, key: string) {
  return definedRefs.get(storage)?.[key];
}

function defineRef(storage: Storage, key: string, ref: Ref<string>) {
  const storageDefines = definedRefs.get(storage);
  if (storageDefines) {
    storageDefines[key] = ref;
  } else {
    definedRefs.set(storage, {
      [key]: ref,
    });
  }
  watch(
    ref,
    (newValue) => {
      storage.setItem(key, newValue);
    },
    {
      immediate: true,
    }
  );
  return ref;
}

export default function storageRef(
  defaultValue: string,
  key: string,
  storage: Storage = localStorage
) {
  return (
    getDefined(storage, key) ||
    defineRef(storage, key, ref<string>(localStorage.getItem(key) || defaultValue))
  );
}
window.addEventListener('storage', (e) => {
  if (e.key === null || e.newValue === null || e.storageArea === null) return;
  const ref = getDefined(e.storageArea, e.key);
  if (ref && e.newValue !== null) {
    ref.value = e.newValue;
  }
});

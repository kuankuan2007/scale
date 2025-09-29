const definedRefs = new WeakMap<
  Storage,
  {
    [key: string]: Ref<string>;
  }
>();

function getDefined(storage: Storage, key: string) {
  return definedRefs.get(storage)?.[key];
}

function defineRef(storage: Storage, key: string, refValue: Ref<string>) {
  const storageDefines = definedRefs.get(storage);
  if (storageDefines) {
    storageDefines[key] = refValue;
  } else {
    definedRefs.set(storage, {
      [key]: refValue,
    });
  }
  watch(
    refValue,
    (newValue) => {
      storage.setItem(key, newValue);
    },
    {
      immediate: true,
    }
  );
  return refValue;
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
  const refValue = getDefined(e.storageArea, e.key);
  if (refValue && e.newValue !== null) {
    refValue.value = e.newValue;
  }
});

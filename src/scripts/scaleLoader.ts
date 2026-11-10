import type { Scale } from '@/types/form';

const loaders = import.meta.glob<{ default: Scale }>('../scales/*.ts');
const loaded = new Map<string, Scale>();

export async function loadScale(id: string) {
  const key = id.toLowerCase();
  if (loaded.has(key)) return;
  const loader = loaders[`../scales/${key}.ts`];
  if (!loader) return;
  try {
    loaded.set(key, (await loader()).default);
  } catch (error) {
    console.error(error);
  }
}

export function getScale(id: string) {
  return loaded.get(id.toLowerCase());
}

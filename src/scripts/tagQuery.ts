import type { LocationQueryValue } from 'vue-router';
import { ALL_TAG_VALUES } from '@/types/scaleTags';

const KNOWN_TAG_VALUES = new Set(ALL_TAG_VALUES);

type QueryInput = LocationQueryValue | LocationQueryValue[] | undefined;

export function parseTagQuery(value: QueryInput): string[] {
  const res: string[] = [];
  for (const item of Array.isArray(value) ? value : [value]) {
    if (!item) continue;
    for (const token of item.split(',')) {
      const tag = token.trim();
      if (tag && KNOWN_TAG_VALUES.has(tag) && !res.includes(tag)) res.push(tag);
    }
  }
  return res;
}

export function parseTextQuery(value: QueryInput): string {
  const first = Array.isArray(value) ? value[0] : value;
  return first ?? '';
}

export function stringifyTagQuery(values: string[]): string | undefined {
  return values.length ? values.join(',') : undefined;
}

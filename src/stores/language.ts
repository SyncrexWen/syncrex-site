// src/stores/language.ts
import { persistentAtom } from '@nanostores/persistent';

// 默认 'zh'，保存到 localStorage 的 key 为 'site-lang'
export const currentLang = persistentAtom<'zh' | 'en'>('site-lang', 'zh');

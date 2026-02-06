// src/stores/language.ts
import { persistentAtom } from '@nanostores/persistent';

// default to Chinese, since the site is primarily targeted at Chinese users
export const currentLang = persistentAtom<'zh' | 'en'>('site-lang', 'zh');

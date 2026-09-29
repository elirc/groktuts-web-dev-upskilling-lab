export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function deepMerge(target, source) {
  const out = { ...target };
  for (const k in source) {
    if (source[k] && typeof source[k] === "object" && !Array.isArray(source[k])) {
      out[k] = deepMerge(target[k] || {}, source[k]);
    } else {
      out[k] = source[k];
    }
  }
  return out;
}

export function getNested(obj, path) {
  return path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
}

export function pick(obj, keys) {
  const res = {};
  keys.forEach(k => { if (k in obj) res[k] = obj[k]; });
  return res;
}

export function omit(obj, keys) {
  const res = { ...obj };
  keys.forEach(k => delete res[k]);
  return res;
}

export function toQueryParams(obj) {
  return Object.entries(obj)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

export function compareConfigs(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function countByStatus(tickets) {
  return tickets.reduce((acc, t) => {
    acc[t.status] = (acc[t.status] || 0) + 1;
    return acc;
  }, {});
}

export function normalizeById(arr) {
  return arr.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
}

export function mergeSettings(defaults, overrides) {
  return deepMerge(defaults, overrides);
}

// ===== 10x+ EXPANDED DRILLS =====

export function countTicketsByPriority(tickets) {
  return tickets.reduce((acc, t) => {
    acc[t.priority] = (acc[t.priority] || 0) + 1;
    return acc;
  }, {});
}

export function extractUniqueUserIds(activities) {
  return [...new Set(activities.map(a => a.userId))];
}

export function buildLookupByKey(arr, key) {
  return arr.reduce((acc, item) => { acc[item[key]] = item; return acc; }, {});
}

export function deepPick(obj, paths) {
  const result = {};
  paths.forEach(path => {
    const parts = path.split('.');
    let src = obj;
    let dst = result;
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i];
      if (src && typeof src === 'object' && p in src) {
        if (i === parts.length - 1) dst[p] = src[p];
        else {
          dst[p] = dst[p] || {};
          dst = dst[p];
          src = src[p];
        }
      } else return;
    }
  });
  return result;
}

export function calculateNetWorth(accounts) {
  return accounts.reduce((sum, a) => sum + (a.type === 'asset' ? a.balance : -a.balance), 0);
}

export function sanitizeUserProfile(profile, allowedFields) {
  const out = {};
  allowedFields.forEach(f => { if (f in profile) out[f] = profile[f]; });
  return out;
}

export function groupByDateRange(items, dateKey, ranges) {
  // simplistic grouping
  return items.reduce((acc, item) => {
    const d = item[dateKey];
    const range = ranges.find(r => d >= r.start && d <= r.end) || { label: 'other' };
    (acc[range.label] ||= []).push(item);
    return acc;
  }, {});
}

export function convertToQueryString(params) {
  return Object.entries(params)
    .filter(([,v]) => v != null)
    .map(([k,v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
}

export function findChangedFields(oldObj, newObj) {
  const changes = {};
  Object.keys(newObj).forEach(k => {
    if (JSON.stringify(oldObj[k]) !== JSON.stringify(newObj[k])) {
      changes[k] = { from: oldObj[k], to: newObj[k] };
    }
  });
  return changes;
}

export function aggregateDailyTotals(transactions) {
  return transactions.reduce((acc, t) => {
    const day = t.date;
    acc[day] = (acc[day] || 0) + (t.type === 'expense' ? -t.amount : t.amount);
    return acc;
  }, {});
}

// 30+ more object drills for JS
export function invertObject(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k,v]) => [v,k]));
}

export function omitBy(obj, pred) {
  return Object.fromEntries(Object.entries(obj).filter(([k,v]) => !pred(v,k)));
}

export function pickBy(obj, pred) {
  return Object.fromEntries(Object.entries(obj).filter(([k,v]) => pred(v,k)));
}

export function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return mergeDeep(target, ...sources);
}
function isObject(item) { return item && typeof item === 'object'; }

export function flattenObject(obj, prefix='') {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null) Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
}

export function unflattenObject(obj) {
  const result = {};
  for (const [k, v] of Object.entries(obj)) {
    const keys = k.split('.');
    keys.reduce((o, key, i) => {
      if (i === keys.length-1) o[key] = v;
      else o[key] = o[key] || {};
      return o[key];
    }, result);
  }
  return result;
}

export function mapValues(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(([k,v]) => [k, fn(v,k)]));
}

export function mapKeys(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(([k,v]) => [fn(k), v]));
}

export function getOrDefault(obj, path, def) {
  return path.split('.').reduce((o, p) => o && o[p] !== undefined ? o[p] : def, obj);
}

export function setNested(obj, path, val) {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((o, k) => o[k] = o[k] || {}, obj);
  target[last] = val;
  return obj;
}

export function diffObjects(a, b) {
  const changes = {};
  for (const k in a) if (a[k] !== b[k]) changes[k] = {old: a[k], new: b[k]};
  for (const k in b) if (!(k in a)) changes[k] = {old: undefined, new: b[k]};
  return changes;
}

export function groupBy(objArr, key) {
  return objArr.reduce((g, item) => {
    (g[item[key]] = g[item[key]] || []).push(item);
    return g;
  }, {});
}

export function toQueryParamsAdvanced(obj, prefix='') {
  const pairs = [];
  for (const [k,v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}[${k}]` : k;
    if (v && typeof v === 'object') pairs.push(toQueryParamsAdvanced(v, key));
    else pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(v)}`);
  }
  return pairs.join('&');
}

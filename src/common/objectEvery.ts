function objectEvery<T>(payload: Object, objectCompare: T): boolean {
  return Object.entries(payload).every(
    ([key, value]) => objectCompare[key] === value,
  );
}

export default objectEvery;

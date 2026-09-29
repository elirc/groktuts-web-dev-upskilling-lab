const reactive = new Proxy({}, {
  set(target, prop, value) {
    console.log(`Setting ${prop}`);
    target[prop] = value;
    return true;
  }
});

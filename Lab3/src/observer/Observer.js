class Observer {
  update(subject) {
    throw new Error(`Observer.update() must be implemented. Received subject: ${subject}`);
  }
}

export default Observer;

class Queue<T> {
  private storage: T[] = [];

  enqueue(data: T): void {
    this.storage.push(data);
  }

  dequeue(): T | undefined {
    return this.storage.shift();
  }

  size(): number {
    return this.storage.length;
  }

  isEmpty(): boolean {
    return this.storage.length === 0;
  }

  toString(): string {
    return this.storage.toString();
  }
}

export default Queue;

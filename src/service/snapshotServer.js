
class SnapshotServer {
  async getAll() {
    const result = await fetch('http://127.0.0.1:9001/api/snapshots');
    return await result.json();
  }

  async get(name) {
    const result = await fetch('http://127.0.0.1:9001/api/snapshots');
    const data = await result.json();
    return data[name];
  }

  async save(name, boardData) {
    const result = await fetch(`http://127.0.0.1:9001/api/snapshots/${name}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(boardData)
    });
  }
}

export default SnapshotServer;

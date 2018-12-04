class SnapshotService {
  async getAll() {
    const result = await fetch('http://127.0.0.1:9001/api/snapshots');
    const data = await result.json();
    const snapshots = [];

    for (var name in data) {
      snapshots.push({
        name: name,
        boardData: data[name]
      });
    }

    return snapshots;
  }

  async save(name, boardData) {
    await fetch(`http://127.0.0.1:9001/api/snapshots/${name}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(boardData)
    });
  }
}

export default SnapshotService;
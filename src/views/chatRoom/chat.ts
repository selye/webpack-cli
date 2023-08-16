export function createConnection(severUrl?: string, roomId?: string) {
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + severUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + severUrl);
    },
  };
}

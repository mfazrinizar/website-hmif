// src/lib/rateLimiter.ts

// class RateLimiter {
//     windowSize: number;
//     maxRequests: number;
//     idToWindows: Map<string, Array<number>>;
  
//     constructor(config: { windowSize: number; maxRequests: number }) {
//       this.windowSize = config.windowSize;
//       this.maxRequests = config.maxRequests;
//       this.idToWindows = new Map<string, Array<number>>();
//     }
  
//     limit(id: string) {
//       const now = Date.now();
  
//       // get queue or initialize it
//       let queue = this.idToWindows.get(id);
//       if (!queue) {
//         queue = [];
//         this.idToWindows.set(id, queue);
//       }
  
//       // clear old windows
//       while (queue.length > 0 && now - queue[0] > this.windowSize) {
//         queue.shift();
//       }
  
//       if (queue.length >= this.maxRequests) return true;
  
//       // add current window to queue
//       queue.push(now);
  
//       return false;
//     }
//   }
  
//   export { RateLimiter };

class RateLimiter {
    windowSize: number; // Time window in milliseconds
    maxRequests: number; // Maximum allowed requests in the window
    timestamps: number[]; // Array to store submission timestamps
  
    constructor(config: { windowSize: number; maxRequests: number }) {
      this.windowSize = config.windowSize;
      this.maxRequests = config.maxRequests;
      this.timestamps = [];
    }
  
    limit(): boolean {
      const now = Date.now();
  
      // Remove timestamps that are outside the window
      this.timestamps = this.timestamps.filter(timestamp => now - timestamp <= this.windowSize);
  
      // Check if the number of requests exceeds the limit
      if (this.timestamps.length >= this.maxRequests) {
        return true; 
      }
  
      // Add the current timestamp to the list
      this.timestamps.push(now);
      return false; 
    }
  }
  
  export { RateLimiter };
  
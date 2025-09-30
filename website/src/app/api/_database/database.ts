//TODO: Change password to a more secure password
//TODO: define the sample env file

// TEMPORARILY DISABLED FOR DEMO - MongoDB connection commented out
/*
import mongoose, { ConnectionOptions } from "mongoose";

export default class MongoConnection {
  private mongoUrl: string;
  private onConnectedCallback: Function;
  private isConnectedBefore = false;
  // private connectionOptions: ConnectionOptions = {
  //   useUnifiedTopology: true,
  // };

  constructor(mongoUrl: string) {
    this.mongoUrl = mongoUrl;
    mongoose.connection.on("error", this.onError.bind(this));
    mongoose.connection.on("disconnected", this.onDisconnected.bind(this));
    mongoose.connection.on("connected", this.onConnected.bind(this));
    // mongoose.connection.on("reconnected", this.onReconnected.bind(this));
  }

  public close(onClosed: (err: Error) => void) {
    mongoose.connection.close(onClosed);
  }

  public connect(onConnectedCallback?: Function) {
    if (onConnectedCallback) {
      this.onConnectedCallback = onConnectedCallback;
    }
    mongoose.connect(this.mongoUrl);
    mongoose.set("toJSON", { versionKey: false, virtuals: true });
    mongoose.set("toObject", { versionKey: false, virtuals: true });
  }

  private onConnected = () => {
    this.isConnectedBefore = true;
    this.onConnectedCallback();
  };

  private onError = () => {
    console.error(`Could not connect to MongoDB at ${this.mongoUrl}`);
  };

  private onDisconnected = () => {
    if (!this.isConnectedBefore) {
      console.info("Retrying MongoDB connection");
      setTimeout(() => {
        this.connect();
      }, 2000);
    }
  };
}
*/

// DEMO MODE - Mock MongoDB connection class
export default class MongoConnection {
  private mongoUrl: string;
  private onConnectedCallback: Function;

  constructor(mongoUrl: string) {
    this.mongoUrl = mongoUrl;
    console.log(`DEMO MODE: Simulating MongoDB connection to ${mongoUrl}`);
  }

  public close(onClosed?: (err: Error | null) => void) {
    console.log("DEMO MODE: Simulating database connection close");
    if (onClosed) onClosed(null);
  }

  public connect(onConnectedCallback?: Function) {
    console.log("DEMO MODE: Simulating successful MongoDB connection");
    if (onConnectedCallback) {
      this.onConnectedCallback = onConnectedCallback;
      // Simulate successful connection after a brief delay
      setTimeout(() => {
        this.onConnectedCallback();
      }, 100);
    }
  }
}

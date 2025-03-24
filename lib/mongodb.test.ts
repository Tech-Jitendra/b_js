import { connectToDatabase, closeDatabaseConnection } from './mongodb';
import mongoose from 'mongoose';
import { logError } from './utils';

jest.mock('mongoose');
jest.mock('./utils');

const mockConnect = jest.fn();
const mockDisconnect = jest.fn();
const mockReadyState = jest.fn();

// Mock mongoose.connection
(mongoose as any).connection = {
  get readyState() {
    return mockReadyState();
  },
};

(mongoose as any).connect = mockConnect;
(mongoose as any).disconnect = mockDisconnect;

describe('MongoDB Utility Functions (Mongoose)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {}); // Suppress console logs
  });

  test('connectToDatabase should connect to MongoDB using Mongoose', async () => {
    mockReadyState.mockReturnValue(0); // Disconnected
    await connectToDatabase();
    expect(mockConnect).toHaveBeenCalledWith('mongodb://localhost:27017/E-commerce'); // Updated to match the new implementation
    expect(console.log).toHaveBeenCalledWith('Connected to MongoDB using Mongoose');
  });

  test('connectToDatabase should not reconnect if already connected', async () => {
    mockReadyState.mockReturnValue(1); // Connected
    await connectToDatabase();
    expect(mockConnect).not.toHaveBeenCalled();
  });

  test('connectToDatabase should log an error if connection fails', async () => {
    const error = new Error('Connection failed');
    mockReadyState.mockReturnValue(0); // Disconnected
    mockConnect.mockRejectedValueOnce(error);

    await expect(connectToDatabase()).rejects.toThrow('Connection failed');
    expect(logError).toHaveBeenCalledWith('Failed to connect to MongoDB using Mongoose', error);
  });

  test('closeDatabaseConnection should disconnect from MongoDB using Mongoose', async () => {
    mockReadyState.mockReturnValue(1); // Connected
    await closeDatabaseConnection();
    expect(mockDisconnect).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('MongoDB connection closed using Mongoose');
  });

  test('closeDatabaseConnection should not disconnect if already disconnected', async () => {
    mockReadyState.mockReturnValue(0); // Disconnected
    await closeDatabaseConnection();
    expect(mockDisconnect).not.toHaveBeenCalled();
  });

  test('closeDatabaseConnection should log an error if disconnection fails', async () => {
    const error = new Error('Disconnection failed');
    mockReadyState.mockReturnValue(1); // Connected
    mockDisconnect.mockRejectedValueOnce(error);

    await expect(closeDatabaseConnection()).rejects.toThrow('Disconnection failed');
    expect(logError).toHaveBeenCalledWith('Failed to close MongoDB connection using Mongoose', error);
  });
});
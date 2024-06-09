// __mocks__/next/navigation.js
const useRouter = () => ({
    push: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
  });
  
  const useSearchParams = jest.fn(() => ({
    get: jest.fn().mockReturnValue(null),
  }));
  
  export { useRouter, useSearchParams };
  
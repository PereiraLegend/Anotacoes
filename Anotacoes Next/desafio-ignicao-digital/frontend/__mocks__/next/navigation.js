const useRouter = jest.fn();
const useSearchParams = jest.fn().mockReturnValue({
    get: jest.fn(),
});

module.exports = {
    useRouter,
    useSearchParams,
};

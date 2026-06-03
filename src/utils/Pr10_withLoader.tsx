export const withAuthLoader = (WrappedComponent) => {
    return function withLoader(props) {
        const isLoading = false; // Simulating a loading state

        if (isLoading) {
            return <p>Loading...</p>;
        }
        return <WrappedComponent {...props} />
    }

}
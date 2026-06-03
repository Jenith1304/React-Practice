export const withAuthHoc = (WrappedComponent) => {
    return function withAuth(props) {
        const isLoggedIn = false; // Simulating a logged-out user

        if (!isLoggedIn) {
            return <p>You need to log in</p>;
        }

        return <WrappedComponent {...props} />;
    };
};
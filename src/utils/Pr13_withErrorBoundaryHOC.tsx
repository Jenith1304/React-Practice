import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
        </div>
    );
}

export const withErrorBoundaryHOC = (WrappedComponent) => {
    return function WithErrorBoundary(props) {
        return (
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <WrappedComponent {...props} />
            </ErrorBoundary>
        );
    };
};

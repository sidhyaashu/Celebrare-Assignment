import { Component } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="flex flex-col items-center justify-center gap-4 py-20 px-6 text-center min-h-[60vh]"
        >
          <span className="text-5xl leading-none">💥</span>
          <div>
            <p className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1.5">
              Something went wrong
            </p>
            <p className="text-sm text-gray-500">
              An unexpected error occurred. Please reload the page.
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="mt-1 px-6 py-2.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-xl border-none cursor-pointer transition-colors duration-150"
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

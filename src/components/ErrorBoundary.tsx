import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-canvas-50">
          <div className="text-center px-6">
            <h1 className="font-display font-bold text-2xl text-navy-800 mb-2">
              Något gick fel
            </h1>
            <p className="text-ink-500 mb-6">
              Ladda om sidan för att försöka igen.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-xl bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-accent transition-all hover:bg-accent-700"
            >
              Ladda om
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

import { PureComponent } from 'react'
import LogRocket from 'logrocket'

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    LogRocket.captureException(error)
  }

  render() {
    if (this.state.hasError) {
      // Todo: render custom fallback UI
      return null
    }

    return this.props.children
  }
}

export default ErrorBoundary

import { PureComponent } from 'react'

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
    // Todo: add log to server
    // console.log('error, info: ', error, info)
    // logErrorToMyService(error, info)
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

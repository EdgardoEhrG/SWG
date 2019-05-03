import React, { Component } from 'react';

import Loader from "../components/loader/loader";
import ErrorIndicator from "../components/error-indicator/error-indicator";

export const fList = (View) => {
    return class extends Component {
    /* State */

    state = {
      data: null,
      loading: true,
      error: false
    }

    /* Life Cycles */

    componentDidMount() {
      this.setState({
        loading: true,
        error: false
      })

      this.props.getData()
        .then((data) => { this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false
          })
        });
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Loader />
      }

      if (error) {
        return <ErrorIndicator />
      }

      return <View {... this.props} data={data} />
      }
    }
  }

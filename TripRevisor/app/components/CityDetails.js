import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Meteor from 'react-native-meteor';
import { View, ScrollView, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  text: {
    padding: 15,
  },
  image: {
    width: 400,
    height: 400,
  },
});

class CityDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: '',
      city: {},
    };
  }

  componentDidMount() {
    const params = { name: this.props.navigation.state.params.name };
    Meteor.call('cities.findOne', params, (err, cities) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', city: cities });
      }
      this.setState({ loading: false });
    });
  }

  renderImages() {
    return this.state.city.photos.map((url, i) => (
      <Image
        key={i} source={{ uri: url }}
        style={styles.image}
      />
        ));
  }

  renderCityDetails() {
    return (
      <View>
        <ScrollView horizontal>
          {this.renderImages()}
        </ScrollView>
        <Text style={styles.text}>{this.state.city.text}</Text>
      </View>
    );
  }

  render() {
    const isLoading = this.state.loading;
    const error = this.state.error;
    return (
      <ScrollView>
        { isLoading ? (
          <Text>Loading data for {this.props.navigation.state.params.name}...</Text>
        ) : this.renderCityDetails()
        }

        {error ? (
          <Text>{error}</Text>
        ) : (null)}
      </ScrollView>
    );
  }
}

export default CityDetails;

import React from "react";
import { Container } from "../../component/container";
import { Reduxstyles as styles } from "./styles";
import { Text } from "react-native";
import { Button } from "../../shared/button";
import { bindActionCreators } from "redux";
import { changecount } from "../../store/actions/actions";
import { connect } from "react-redux";

function Redux({ count, actions }) {
  function incrementCount() {
    count++;
    actions.changecount(count);
  }
  return (
    <>
      <Container>
        <Text style={{ fontSize: 18, alignSelf: "center", marginTop: 10 }}>
          {count}
        </Text>
        <Button
          title="Submit Editing"
          style={styles.button}
          onPress={incrementCount}
        />
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  count: state.countReducer.count;
};

const mapDispatchToProps = (dispatch) => {
  actions: bindActionCreators({ changecount }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);

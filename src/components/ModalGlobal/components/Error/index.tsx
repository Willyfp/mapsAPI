import Button from 'components/Button';
import Text from 'components/Text';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'store/reducers';
import {ModalCreators} from 'store/reducers/global';

const mapStateToProps = ({global}: RootState) => ({
  message: global.getIn(['modal', 'message']),
});

const mapDispatchToProps = {
  setModal: ModalCreators.setModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Error = ({message, setModal}: PropsFromRedux) => {
  const closeModal = () => {
    setModal({visible: false});
  };

  return (
    <>
      <Text fontSize={25}>ERRO!</Text>

      <Text fontSize={20}>{message}</Text>

      <Button type="submit" onPress={closeModal}>
        OK
      </Button>
    </>
  );
};

export default connector(Error);

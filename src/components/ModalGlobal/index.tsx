import React from 'react';
import {Modal} from 'react-native';

import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../store/reducers';
import {ModalCreators} from '../../store/reducers/global';
import Error from './components/Error';
import {ViewModal, CenteredView} from './styles';

const mapStateToProps = ({global}: RootState) => ({
  visible: global.getIn(['modal', 'visible']),
  type: global.getIn(['modal', 'type']),
  child: global.getIn(['modal', 'child']),
});

const mapDispatchToProps = {
  setModal: ModalCreators.setModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ModalGlobal = ({setModal, visible, child, type}: PropsFromRedux) => {
  const closeModal = () => {
    setModal({visible: false, child: null});
  };

  return (
    <Modal visible={visible} onRequestClose={closeModal} transparent>
      <CenteredView>
        <ViewModal>{type === 'error' ? <Error /> : child}</ViewModal>
      </CenteredView>
    </Modal>
  );
};

export default connector(ModalGlobal);

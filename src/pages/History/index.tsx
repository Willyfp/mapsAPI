import Header from 'components/Header';
import Text from 'components/Text';
import React, {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'store/reducers';
import {ListHistoryCreators} from 'store/reducers/location';
import {PaddingView} from 'styles';
import {Card, ScrollHistory} from './styles';

const mapStateToProps = ({location}: RootState) => ({
  history: location.getIn(['history', 'list']),
});

const mapDispatchToProps = {
  listHistory: ListHistoryCreators.listHistoryRequest,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const History = ({history, listHistory}: PropsFromRedux) => {
  useEffect(() => {
    listHistory();
  }, []);

  return (
    <>
      <Header title="Histórico" />

      <PaddingView>
        <Text bold fontSize={30}>
          Rotas Pesquisadas
        </Text>

        <ScrollHistory>
          {history.map(item => (
            <Card key={item.id}>
              {item.textPlaceholder.map(subItem => (
                <Text key={subItem.placeholder}>
                  <Text bold>{subItem.placeholder}</Text> {subItem.value}
                </Text>
              ))}
            </Card>
          ))}
        </ScrollHistory>
      </PaddingView>
    </>
  );
};

export default connector(History);

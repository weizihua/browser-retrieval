import React from 'react';
import classNames from 'classnames';
import Card from 'src/popup/components/Card';
import Label from 'src/popup/components/Label';
import Pre from 'src/popup/components/Pre';
import usePort from 'src/popup/hooks/usePort';
import channels from 'src/shared/channels';

function ListeningState({ className, ...rest }) {
  const listeningState = usePort(channels.listening);

  return (
    <Card className={classNames(className, 'p-4')} {...rest}>
      <Label className="mb-2">Listening on:</Label>
      <Pre>{listeningState}</Pre>
    </Card>
  );
}

export default ListeningState;
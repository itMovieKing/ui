import React, { type FC } from 'react';

const BoldText: FC<{ text: string }> = (props) => <strong>{props.text}</strong>;

export default BoldText;

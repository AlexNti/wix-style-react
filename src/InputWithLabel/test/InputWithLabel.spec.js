import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import InputWithLabel from '../InputWithLabel';
import { inputWithLabelPrivateDriverFactory } from './InputWithLabel.private.uni.driver';

import ChevronDown from 'wix-style-react/new-icons/ChevronDown';

import dataHooks from '../../LabelledElement/dataHooks';
import Input from '../../Input';

describe('InputWithLabel', () => {
  const render = createRendererWithUniDriver(
    inputWithLabelPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render with value', async () => {
    const value = 'my value';
    const { driver } = render(<InputWithLabel value={value} />);
    const currentValue = await driver.getValue();
    expect(currentValue).toEqual(value);
  });

  it('should render without value', async () => {
    const { driver } = render(<InputWithLabel />);
    const currentValue = await driver.getValue();
    expect(currentValue).toBeFalsy();
  });

  it('should render a label', async () => {
    const label = 'my label';
    const { driver } = render(
      <InputWithLabel dataHook={dataHooks.labelledElement} label={label} />,
    );
    const currentLabel = await driver.getLabelText();
    expect(currentLabel).toEqual(label);
  });

  it('should render no icons', async () => {
    const { driver } = render(<InputWithLabel />);
    expect(await driver.getSuffixesCount()).toEqual(0);
  });

  it('should render a single icon', async () => {
    const icon = [<ChevronDown />];
    const { driver } = render(<InputWithLabel suffix={icon} />);
    expect(await driver.getSuffixesCount()).toEqual(1);
  });

  it('should render two icons', async () => {
    const icons = [<ChevronDown />, <ChevronDown />];
    const { driver } = render(<InputWithLabel suffix={icons} />);
    expect(await driver.getSuffixesCount()).toEqual(2);
  });

  it('should render an error message', async () => {
    const { driver } = render(
      <InputWithLabel status={Input.StatusError} statusMessage="a message" />,
    );
    expect(await driver.getErrorMessage()).toEqual('a message');
  });

  it('should not render a message without a status', async () => {
    const { driver } = render(<InputWithLabel statusMessage="a message" />);
    expect(await driver.hasErrorMessage()).toEqual(false);
  });
});

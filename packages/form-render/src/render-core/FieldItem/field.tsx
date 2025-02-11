import React, { useContext, useEffect } from 'react';
import { Button, ConfigProvider, Form } from 'antd';
import { useUpdateEffect } from 'ahooks';
import { _get, translation, isFunction } from '../../utils';

export const FieldWrapperStatus = (props: any) => {
  const { Field, fieldProps, maxWidth, defaultValue, ...otherProps } = props;
  const { onStatusChange, addons, ...otherFieldProps } = fieldProps;
  const style = maxWidth ? { ...fieldProps?.style } : { maxWidth, ...fieldProps?.style };

  const { status } = Form.Item.useStatus();

  useEffect(() => {
    const errors = addons.getFieldError(addons.dataPath);
    onStatusChange && onStatusChange(status, errors);
  }, [status]);

  useUpdateEffect(() => {
    otherProps.onChange(defaultValue);
  }, [JSON.stringify(defaultValue)]);

  return (
    <Field 
      {...otherProps} 
      {...otherFieldProps} 
      style={style}
      addons={addons}
    />
  );
};

export const FieldWrapper = (props: any) => {
  const { Field, fieldProps, maxWidth, defaultValue, ...otherProps } = props;
  const { addons, schema } = fieldProps;

  const _style = maxWidth ? { ...fieldProps?.style } : { maxWidth, ...fieldProps?.style };
  const { removeBtn } = schema;

  const configCtx = useContext(ConfigProvider.ConfigContext);
  const t = translation(configCtx);

  useUpdateEffect(() => {
    otherProps.onChange(defaultValue);
  }, [JSON.stringify(defaultValue)]);

  const handleRemove = () => {
    if (isFunction(removeBtn?.onClick)) {
      removeBtn.onClick(() => {
        addons.setSchemaByPath(addons.schemaPath, { hidden: true });
      });
      return;
    }
    addons.setSchemaByPath(addons.schemaPath, { hidden: true });
  };

  return (
    <>
      <Field 
        {...otherProps} 
        {...fieldProps}
        style={_style}
      />
      {removeBtn && (
        <Button
          type='link'
          danger
          {...removeBtn}
          onClick={handleRemove}
        >
          {removeBtn?.text || t('delete')}
        </Button>
      )}
    </>
  );
}
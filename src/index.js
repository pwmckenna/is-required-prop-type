import PropTypeError from 'prop-type-error';

export default propType => (props, propName, componentName, location, propFullName, ...rest) => {
    const propDisplayName = propFullName || propName;
    if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError(`The ${location} \`${propDisplayName}\` is marked as required in \`${componentName}\` but its value is \`null\`.`);
          }
          return new PropTypeError(`The ${location} \`${propDisplayName}\` is marked as required in \`${componentName}\` but its value is \`undefined\`.`);
        }
        return null;
    } else {
        return propType(props, propName, componentName, ...rest);
    }
}
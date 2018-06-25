const IntToHexString = (n, minDigits) => {
  minDigits = minDigits || 2;

  const hexString = parseInt(n,10).toString(16).toUpperCase();
  if (hexString.length >= minDigits){
    return hexString;
  }

  const padding = Array(minDigits - hexString.length).fill(0).join('')
  return padding + hexString;
}

export default IntToHexString;

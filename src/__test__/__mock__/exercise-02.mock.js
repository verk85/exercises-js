export function oneSecondsPassed() {
  const date = new Date();
  return () => {
    const curr = new Date() - date;
    if (curr > 1000) return `Successful Try`;
    else throw `${curr} < 1000`;
  };
}

function findMutantByPower(mutants, power) {
  const foundMutants = [];

  for (const mutant of mutants) {
    if (mutant.power === power) {
      foundMutants.push(mutant.name);
    }
  }

  if (foundMutants.length > 0) {
    return `Se encontraron mutantes con el poder '${power}': ${foundMutants.join(', ')}.`;
  }

  return `No se encontró ningún mutante con el poder '${power}'.`;
}

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telepathy' },
  { name: 'Cyclops', power: 'optic blast' }
];

console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'invisibility'));
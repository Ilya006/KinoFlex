const getEnvVar = (key: string) => {
  const prefix = 'REACT_APP_'
  const fullKey = prefix + key

  if (process.env[fullKey] === undefined) {
    throw new Error(`Env variable ${key} is required`)
  }

  return process.env[fullKey] || ''
}

export const MY_STRING = getEnvVar('API_URL')

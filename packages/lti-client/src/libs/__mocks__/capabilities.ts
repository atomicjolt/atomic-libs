export async function getCapabilities() {
  return [
    {
      subject: 'lti.capabilities'
    },
    {
      subject: 'lti.get_data',
      frame: 'platformFrameName'
    },
    {
      subject: 'lti.put_data',
      frame: 'platformFrameName'
    }
  ];
}

export async function getCapability(subject: String) {
  console.log('MOCK!!');
  if (subject === 'lti.capabilities') {
    return { 'subject': 'lti.capabilities' };
  } else if (subject === 'lti.get_data') {
    return { 'subject': 'lti.get_data', 'frame': 'platformFrameName' };
  } else if (subject === 'lti.put_data') {
    return { 'subject': 'lti.put_data', 'frame': 'platformFrameName' };
  }
  return null;
}

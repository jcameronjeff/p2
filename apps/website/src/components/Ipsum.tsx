import React from 'react';

const Ipsum = ({size = 1}) => {
  const content = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa.',
  'Dolor sed viverra ipsum nunc aliquet bibendum. Ut consequat semper viverra nam libero justo laoreet sit amet. Vestibulum morbi blandit cursus risus.',
  'Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Sed augue lacus viverra vitae.',
  'Id aliquet risus feugiat in ante metus dictum. Nibh tortor id aliquet lectus proin. Justo nec ultrices dui sapien eget mi proin.',
  'Erat pellentesque adipiscing commodo elit at imperdiet. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Mattis enim ut tellus elementum.',
  'Gravida dictum fusce ut placerat orci nulla pellentesque. In mollis nunc sed id semper risus. Sit amet facilisis magna etiam tempor orci eu lobortis elementum.',
  'Enim nunc faucibus a pellentesque sit amet porttitor. Neque gravida in fermentum et. Vitae justo eget magna fermentum iaculis eu. Porttitor massa id neque aliquam. Diam maecenas sed enim ut sem viverra.',
  'Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Lectus quam id leo in. Dui sapien eget mi proin. Scelerisque in dictum non consectetur.',
  'Sodales ut etiam sit amet nisl purus. Convallis aenean et tortor at risus viverra adipiscing at in. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.',
  'Elementum nisi quis eleifend quam adipiscing. Blandit aliquam etiam erat velit scelerisque in dictum. Iaculis nunc sed augue lacus viverra vitae.',
  'Dignissim sodales ut eu sem integer vitae justo eget magna. Ornare arcu odio ut sem nulla pharetra. Ullamcorper sit amet risus nullam eget felis eget nunc.',
  'Placerat vestibulum lectus mauris ultrices. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque.',
  'Vulputate eu scelerisque felis imperdiet proin fermentum. Arcu ac tortor dignissim convallis aenean et. Eget mi proin sed libero. Malesuada fames ac turpis egestas sed tempus urna.',
  'Ante in nibh mauris cursus mattis molestie a iaculis at. Sapien faucibus et molestie ac feugiat sed lectus. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.',
  'Nascetur ridiculus mus mauris vitae ultricies leo integer. At volutpat diam ut venenatis tellus in metus vulputate eu. Tortor aliquam nulla facilisi cras fermentum odio.',
  'Duis ultricies lacus sed turpis tincidunt id aliquet risus. Sapien eget mi proin sed libero enim. Non quam lacus suspendisse faucibus. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit.',
  'Sed risus ultricies tristique nulla. Risus nullam eget felis eget. Arcu odio ut sem nulla pharetra diam sit amet nisl. Scelerisque felis imperdiet proin fermentum leo vel orci.',
  'Tristique risus nec feugiat in. Diam vel quam elementum pulvinar etiam non. Tortor pretium viverra suspendisse potenti nullam ac. Fermentum iaculis eu non diam. Quam pellentesque nec nam aliquam sem.',
  'Enim nec dui nunc mattis enim. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Elit ut aliquam purus sit amet luctus venenatis lectus. Justo donec enim diam vulputate ut pharetra sit.',
  'Diam vel quam elementum pulvinar etiam non quam lacus. Facilisis gravida neque convallis a cras semper auctor. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus.',
  'Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Eget mi proin sed libero. Suspendisse interdum consectetur libero id faucibus nisl. Dui ut ornare lectus sit amet.',
  'In nisl nisi scelerisque eu ultrices. Erat imperdiet sed euismod nisi porta lorem. Sed vulputate mi sit amet mauris commodo quis imperdiet. Volutpat blandit aliquam etiam erat.',
  'Condimentum vitae sapien pellentesque habitant. Condimentum lacinia quis vel eros donec. Venenatis lectus magna fringilla urna. Sagittis id consectetur purus ut faucibus pulvinar elementum integer.',
  'Sit amet justo donec enim diam vulputate ut pharetra. Tincidunt augue interdum velit euismod in. Facilisis leo vel fringilla est ullamcorper. Pellentesque eu tincidunt tortor aliquam nulla.',
  'In hac habitasse platea dictumst. Ut consequat semper viverra nam libero justo. Diam in arcu cursus euismod quis. Euismod elementum nisi quis eleifend quam adipiscing. Orci eu lobortis elementum nibh tellus.',
  'Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Posuere morbi leo urna molestie at. Dolor sit amet consectetur adipiscing.',
  'Nunc aliquet bibendum enim facilisis gravida neque convallis. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Leo in vitae turpis massa. Euismod quis viverra nibh cras.']

  return <>{content.splice(0, size).map((c, index) => (
    <p key={`ipsum-${index}`}>{c}</p>
  ))}</>
}

export default Ipsum;

export const vehicle = {
  year: 2016,
  make: 'BMW',
  model: '5 Series 535i xDrive M Sport Line',
  vin: 'WBA5B3C56GG260006',
  odometer: 47165,
  drivetrain: 'AWD',
  engine: '4 Cyl Turbo',
  image: 'https://images.cdn.manheim.com/20220329022856-749f5a99-3c24-4e97-8fc0-166acedf20aa.jpg?size=w344h256',
  transmission: 'Auto',
  msrp: '$60,500',
}

export function VehicleBanner(props: typeof vehicle) {
  const { year, make, model, vin, odometer, drivetrain, engine, transmission } = props;
  return (
    <div>
      <h2>{year} {make} {model}</h2>
      <h5>{vin}</h5>
      <div>
        <small>{odometer} &bull; {drivetrain} &bull; {engine} &bull; {transmission}</small>
      </div>
    </div>
  )
}

export function VehicleListItem() {
  const { image, msrp } = vehicle;
  // TODO - create an actual CSS classname alias.
  const vlpItemClass = 'grid grid-cols-[200px_1fr_130px_200px] gap-4'
  return (
    <div className={vlpItemClass}>
      <figure>
        <img src={image} />
      </figure>
      <VehicleBanner {...vehicle} />
      <div className='text-right'>
        <h4>On Sale</h4>
        <h5>{msrp}</h5>
      </div>
      <div>
        Current Bid
      </div>
    </div>
  )
}

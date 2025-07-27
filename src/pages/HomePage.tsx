import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decrement, increment } from '../redux/slices/counter';

const HomePage = () => {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body text-center'>
              <h1 className='card-title mb-4'>Counter</h1>
              <h2>Current Count: {count}</h2>
              <div className='w-50 d-flex justify-content-between mt-4 mb-4 mx-auto'>
                <button
                  onClick={() => dispatch(increment())}
                  className='btn btn-dark'
                >
                  ➕
                </button>
                <button
                  onClick={() => dispatch(decrement())}
                  className='btn btn-dark'
                >
                  ➖
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useContext } from 'react';
import MyContext from '../../Context/data/useContext';
import Layout from '../../Components/layout/Layout';
import Loader from '../../components/loader/Loader';

function Order() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.user?.uid;
  const { mode, loading, order } = useContext(MyContext);

  const isDark = mode === 'dark';
  const bgColor = isDark ? 'bg-[#1f1f1f]' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-gray-800';
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-200';

  const userOrders = order.filter((obj) => obj.userid === userId);
  const allItems = userOrders.flatMap((orderItem) => orderItem.cartItems);

  return (
    <Layout>
      {loading && <Loader />}

      <div className="h-full pt-10 px-4 max-w-5xl mx-auto">
        <h1 className={`text-3xl font-bold mb-6 text-center ${textColor}`}>
          My Orders ({allItems.length})
        </h1>

        {allItems.length > 0 ? (
          <div className="space-y-6 overflow-y-auto max-h-[80vh] pb-4">
            {allItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-6 p-5 rounded-xl shadow-lg border ${bgColor} ${textColor} ${borderColor}`}
              >
                {/* Count */}
                <div className="text-2xl font-bold text-blue-500 min-w-[40px] text-center">
                  #{index + 1}
                </div>

                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg border border-gray-300"
                />

                {/* Info */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-base font-medium mt-1 text-green-400">
                    ₹{item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2 className="text-center text-xl text-red-500 mt-10">
            No Orders Found
          </h2>
        )}
      </div>
    </Layout>
  );
}

export default Order;

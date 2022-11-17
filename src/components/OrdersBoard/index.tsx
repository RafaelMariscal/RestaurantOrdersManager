import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OderModal";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setSelectedOrder(order);
    setIsModalVisible(!isModalVisible);
  }

  return (
    <Board>
      <OrderModal visible={isModalVisible} order={selectedOrder} />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders.length}</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map(order => {
            return (
              <button type="button" key={order._id}
                onClick={() => handleOpenModal(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            );
          })}
        </OrdersContainer>
      )}


    </Board>
  );
}

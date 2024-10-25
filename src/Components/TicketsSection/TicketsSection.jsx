import React from "react";
import "./TicketSection.css";
import { Container } from "react-bootstrap";
import tickets from "../../assets/Data/tickets.json";
export default function TicketsSection() {
  return (
    <>
      <Container className="ticket-section">
        <h2 class="fos-ticket-h2">PILETID JA HINNAD</h2>
        <p className="text-center fos-ticket-p arimo">
          Vaatama sellel, mis pileti te valisite, te saate täieliku ekskursiooni
          programmi
        </p>
        <div class="tickets">
          {tickets.map((item) => {
            const splitDesc = item.description.split(", ");
            const newPrice = item.price - 201;
            return (
              <div class="ticket">
                <div class="ticket-head">
                  <p class="montserrat ">{item.type}</p>
                  <p class="montserrat ">
                    <sup>{item.price}€</sup>
                    {newPrice}€
                  </p>
                </div>
                <hr id="ticket-hr" />
                <ul>
                  {splitDesc.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
                <a href="#formScroll" class="fos-ticket-button">
                  Vali
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

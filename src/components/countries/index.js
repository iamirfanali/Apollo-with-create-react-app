/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { COUNTRIES_QUERY, COUNTRY_QUERY } from './query/country.query';
import Pagination from './../common/pagination';
import { paginate } from './../utils/paginate';
import Modal from "react-responsive-modal";
import { Table, ModalInnerWrap } from './countries.style';

const CountriesTable = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [openModal, setOpenModal] = useState(false)
  const pageSize = 10;
  let totalCountries;

  const { data, loading, error } = useQuery(COUNTRIES_QUERY)
  const [getCountry, { loading: countryLoading, error: countryError, data: country }] = useLazyQuery(COUNTRY_QUERY)

  const handlePageChage = page => {
    setCurrentPage(page)
  }

  const modalHandle = () => {
    setOpenModal(!openModal)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  totalCountries = data.countries.length
  const countries = paginate(data.countries, currentPage, pageSize)

  return (
    <>
      <Table>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td onClick={() => {
                getCountry({ variables: { country_code: country.code } })
                modalHandle()
              }}>{country.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal open={openModal} onClose={() => modalHandle()}>
        <ModalInnerWrap>
          {countryLoading && (
            <p>Loading...</p>
          )}
          {countryError && (
            <p>Error</p>
          )}
          {country && (
            <>
              <h3>Country Details</h3>
              <p>Name: {country.country.name}</p>
              <p>Phone: {country.country.phone}</p>
              <p>Currency: {country.country.currency}</p>
              <p>Language: {country.country.languages.name}</p>
              <p>Emoji: {country.country.emoji}</p>
              <p>EmojiU: {country.country.emojiU}</p>
              <p>State: {country.country.states.name}</p>
            </>
          )}

        </ModalInnerWrap>
      </Modal>
      <Pagination itemsCount={totalCountries} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChage} />
    </>
  );
}

export default CountriesTable;
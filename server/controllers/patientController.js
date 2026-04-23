const pool = require('../config/db.js');

const createPatient = (body) => {
    return new Promise(function(resolve, reject) {
        const {
            first_name,
            middle_name,
            last_name,
            date_of_birth,
            sex,
            phone,
            email,
            street_address,
            barangay,
            city,
            country,
            emergency_contact_name,
            emergency_contact_phone
        } = body;
        pool.query(
            `INSERT INTO patients (
                first_name,
                middle_name,
                last_name,
                date_of_birth,
                sex,
                phone,
                email,
                street_address,
                barangay,
                city,
                country,
                emergency_contact_name,
                emergency_contact_phone
            )
            VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13
            )
            RETURNING *
            `,
            [
                first_name,
                middle_name,
                last_name,
                date_of_birth,
                sex,
                phone,
                email,
                street_address,
                barangay,
                city,
                country,
                emergency_contact_name,
                emergency_contact_phone
            ],
            (error,results) => {
                if (error) {
                    reject (error);
                }
                if (results && results.rows) {
                    resolve (`A new patient has been added: ${JSON.stringify(results.rows[0])}`);
                } else {
                    reject (new Error("No results found"));
                }
            }
        );
    });
};


const getPatients = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM patients", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

const deletePatient = async (id) => {
  return new Promise(function(resolve, reject) {
    pool.query(
      "DELETE FROM patients WHERE id = $1",
      [id],
      (error, results) => {

        if (error) {
          return reject(error);
        }

        if (results.rowCount === 0) {
          return reject(new Error("Patient not found"));
        }

        resolve(`Patient deleted with ID: ${id}`);
      }
    );
  });
};


module.exports = {createPatient, getPatients, deletePatient};
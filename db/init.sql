CREATE TABLE IF NOT EXISTS button_counter(
    id SERIAL PRIMARY KEY,
    count NUMERIC(20, 0) NOT NULL
);

INSERT INTO button_counter (
    count
) VALUES ( 0 )

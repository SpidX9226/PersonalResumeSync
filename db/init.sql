CREATE TABLE IF NOT EXISTS unique_visits (
    user_id UUID PRIMARY KEY,
    first_visit TIMESTAMPTZ NOT NULL,
    last_visit TIMESTAMPTZ NOT NULL
);

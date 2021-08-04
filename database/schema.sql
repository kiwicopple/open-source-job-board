drop table if exists job_categories;
drop table if exists jobs;
drop table if exists companies;
drop table if exists categories;
drop table if exists departments;
drop type if exists job_type;

create type job_type as enum ('full_time', 'part_time', 'contract', 'internship');

create table departments (
    id bigint generated by default as identity primary key,
    name text not null,
    description text
);

create table categories (
    id bigint generated by default as identity primary key,
    name text not null,
    description text
);

create table companies (
    id bigint generated by default as identity primary key,
    inserted_at timestamptz default timezone('utc', now()) not null,
    name text
);

create table jobs (
    id bigint generated by default as identity primary key,
    company_id bigint not null references companies(id),
    title text not null,
    description text not null,
    tags text,
    type job_type not null
);

-- Add Full Text Search
alter table jobs
  add column fts tsvector generated always as (
     to_tsvector('english', title || ' ' || description || ' ' || coalesce(tags, ''))
  ) stored;

create index fts_idx ON jobs USING GIN (fts);

create table job_categories (
    job_id bigint not null references jobs(id),
    category_id bigint not null references categories(id),
    primary key (job_id, category_id)
);

-- Dummy data



insert into
    departments(id, name, description)
values
  (1, 'Business/Ops', 'Business and Operations')
, (2, 'Engineering', 'Engineering')
, (3, 'Tech/Developers', 'Tech')
, (4, 'Finance/Investments', 'Finance / Investments')
;

insert into
    categories(id, name)
values
  (1, 'Renewable Energy')
, (2, 'Carbon Removal')
, (3, 'Sustainable Foods')
, (4, 'Circular Economy')
, (5, 'Green Finance')
;

insert into
    companies(id, name)
values
  (1, 'Stripe')
, (2, 'Microsoft')
;

insert into
    jobs(id, company_id, title, description, type)
values
  (1, 1, 'Climate officer', '# Climate officer', 'full_time')
, (2, 2, 'Sustainability manager', '# Sustainability manager', 'part_time')
;

insert into
    job_categories(job_id, category_id)
values
  (1, 1)
, (2, 2)
;
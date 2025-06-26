-- Insert sample users
INSERT INTO users (
    email, password_hash, first_name, last_name, age, gender, university, status, 
    description, looking_for, subscription_status, trial_end_date
) VALUES 
(
    'sarah.ahmed@example.com', 
    '$2b$10$example_hash_1', 
    'Sarah', 'Ahmed', 22, 'female', 
    'University of Oxford', 'student',
    'Medical student passionate about helping others. Looking for someone who shares Islamic values and has ambition.',
    'Someone who is kind, practicing, and has strong family values. Preferably in healthcare or education.',
    'active',
    NULL
),
(
    'omar.hassan@example.com', 
    '$2b$10$example_hash_2', 
    'Omar', 'Hassan', 24, 'male', 
    'Imperial College London', 'graduate',
    'Software engineer who loves technology and innovation. Seeking a life partner who values family and faith.',
    'A practicing Muslim woman who is educated and shares similar interests in technology or science.',
    'active',
    NULL
),
(
    'fatima.ali@example.com', 
    '$2b$10$example_hash_3', 
    'Fatima', 'Ali', 21, 'female', 
    'University of Cambridge', 'student',
    'Psychology student interested in mental health advocacy. Looking for someone kind and understanding.',
    'Someone who is emotionally mature, practicing, and supportive of my career goals.',
    'trial',
    CURRENT_TIMESTAMP + INTERVAL '25 days'
),
(
    'ahmed.khan@example.com', 
    '$2b$10$example_hash_4', 
    'Ahmed', 'Khan', 25, 'male', 
    'London School of Economics', 'graduate',
    'Finance professional with a passion for community work. Seeking someone who shares similar values.',
    'A practicing Muslim woman who is family-oriented and interested in community service.',
    'active',
    NULL
),
(
    'admin@unistudents.com', 
    '$2b$10$example_hash_admin', 
    'Admin', 'User', 30, 'male', 
    'System Admin', 'graduate',
    'System administrator',
    'N/A',
    'active',
    NULL
);

-- Insert sample messages
INSERT INTO messages (sender_id, receiver_id, content) VALUES 
(
    (SELECT id FROM users WHERE email = 'omar.hassan@example.com'),
    (SELECT id FROM users WHERE email = 'sarah.ahmed@example.com'),
    'Assalamu alaikum, I hope you are doing well. I noticed we both share an interest in helping others through our careers. Would you like to connect?'
),
(
    (SELECT id FROM users WHERE email = 'sarah.ahmed@example.com'),
    (SELECT id FROM users WHERE email = 'omar.hassan@example.com'),
    'Wa alaikum assalam, thank you for your message. I would be happy to get to know you better. What inspired you to pursue software engineering?'
);

-- Insert sample photo requests
INSERT INTO photo_requests (requester_id, requested_id, status) VALUES 
(
    (SELECT id FROM users WHERE email = 'omar.hassan@example.com'),
    (SELECT id FROM users WHERE email = 'sarah.ahmed@example.com'),
    'pending'
),
(
    (SELECT id FROM users WHERE email = 'ahmed.khan@example.com'),
    (SELECT id FROM users WHERE email = 'fatima.ali@example.com'),
    'approved'
);

-- Insert sample subscriptions
INSERT INTO subscriptions (user_id, status, current_period_start, current_period_end) VALUES 
(
    (SELECT id FROM users WHERE email = 'sarah.ahmed@example.com'),
    'active',
    CURRENT_TIMESTAMP - INTERVAL '15 days',
    CURRENT_TIMESTAMP + INTERVAL '15 days'
),
(
    (SELECT id FROM users WHERE email = 'omar.hassan@example.com'),
    'active',
    CURRENT_TIMESTAMP - INTERVAL '10 days',
    CURRENT_TIMESTAMP + INTERVAL '20 days'
),
(
    (SELECT id FROM users WHERE email = 'fatima.ali@example.com'),
    'trialing',
    CURRENT_TIMESTAMP - INTERVAL '5 days',
    CURRENT_TIMESTAMP + INTERVAL '25 days'
);
